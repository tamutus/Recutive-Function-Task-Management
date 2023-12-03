import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutProjectsInputSchema } from './PriorityCreateWithoutProjectsInputSchema';
import { PriorityUncheckedCreateWithoutProjectsInputSchema } from './PriorityUncheckedCreateWithoutProjectsInputSchema';
import { PriorityCreateOrConnectWithoutProjectsInputSchema } from './PriorityCreateOrConnectWithoutProjectsInputSchema';
import { PriorityUpsertWithoutProjectsInputSchema } from './PriorityUpsertWithoutProjectsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateToOneWithWhereWithoutProjectsInputSchema } from './PriorityUpdateToOneWithWhereWithoutProjectsInputSchema';
import { PriorityUpdateWithoutProjectsInputSchema } from './PriorityUpdateWithoutProjectsInputSchema';
import { PriorityUncheckedUpdateWithoutProjectsInputSchema } from './PriorityUncheckedUpdateWithoutProjectsInputSchema';

export const PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.PriorityUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutProjectsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => PriorityUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PriorityUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => PriorityUpdateWithoutProjectsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema;
