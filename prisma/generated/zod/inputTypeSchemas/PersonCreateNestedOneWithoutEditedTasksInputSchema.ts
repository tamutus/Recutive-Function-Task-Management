import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEditedTasksInputSchema } from './PersonCreateWithoutEditedTasksInputSchema';
import { PersonUncheckedCreateWithoutEditedTasksInputSchema } from './PersonUncheckedCreateWithoutEditedTasksInputSchema';
import { PersonCreateOrConnectWithoutEditedTasksInputSchema } from './PersonCreateOrConnectWithoutEditedTasksInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutEditedTasksInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutEditedTasksInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEditedTasksInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutEditedTasksInputSchema;
