import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutEditedTasksInputSchema } from './PersonCreateWithoutEditedTasksInputSchema';
import { PersonUncheckedCreateWithoutEditedTasksInputSchema } from './PersonUncheckedCreateWithoutEditedTasksInputSchema';

export const PersonCreateOrConnectWithoutEditedTasksInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutEditedTasksInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedTasksInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutEditedTasksInputSchema;
