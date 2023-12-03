import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutTasksInputSchema } from './PersonCreateWithoutTasksInputSchema';
import { PersonUncheckedCreateWithoutTasksInputSchema } from './PersonUncheckedCreateWithoutTasksInputSchema';

export const PersonCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutTasksInputSchema;
