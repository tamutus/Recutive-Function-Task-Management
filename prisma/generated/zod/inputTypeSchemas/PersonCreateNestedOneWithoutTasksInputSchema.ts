import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutTasksInputSchema } from './PersonCreateWithoutTasksInputSchema';
import { PersonUncheckedCreateWithoutTasksInputSchema } from './PersonUncheckedCreateWithoutTasksInputSchema';
import { PersonCreateOrConnectWithoutTasksInputSchema } from './PersonCreateOrConnectWithoutTasksInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutTasksInputSchema;
