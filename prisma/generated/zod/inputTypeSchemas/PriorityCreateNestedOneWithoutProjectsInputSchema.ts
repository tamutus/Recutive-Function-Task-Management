import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutProjectsInputSchema } from './PriorityCreateWithoutProjectsInputSchema';
import { PriorityUncheckedCreateWithoutProjectsInputSchema } from './PriorityUncheckedCreateWithoutProjectsInputSchema';
import { PriorityCreateOrConnectWithoutProjectsInputSchema } from './PriorityCreateOrConnectWithoutProjectsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';

export const PriorityCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.PriorityCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutProjectsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional()
}).strict();

export default PriorityCreateNestedOneWithoutProjectsInputSchema;
