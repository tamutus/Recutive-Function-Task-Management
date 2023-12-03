import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutTagsInputSchema } from './PriorityCreateWithoutTagsInputSchema';
import { PriorityUncheckedCreateWithoutTagsInputSchema } from './PriorityUncheckedCreateWithoutTagsInputSchema';
import { PriorityCreateOrConnectWithoutTagsInputSchema } from './PriorityCreateOrConnectWithoutTagsInputSchema';
import { PriorityUpsertWithoutTagsInputSchema } from './PriorityUpsertWithoutTagsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateToOneWithWhereWithoutTagsInputSchema } from './PriorityUpdateToOneWithWhereWithoutTagsInputSchema';
import { PriorityUpdateWithoutTagsInputSchema } from './PriorityUpdateWithoutTagsInputSchema';
import { PriorityUncheckedUpdateWithoutTagsInputSchema } from './PriorityUncheckedUpdateWithoutTagsInputSchema';

export const PriorityUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.PriorityUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => PriorityUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PriorityUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => PriorityUpdateWithoutTagsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default PriorityUpdateOneRequiredWithoutTagsNestedInputSchema;
