import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutPrivateTagsInputSchema } from './PriorityCreateWithoutPrivateTagsInputSchema';
import { PriorityUncheckedCreateWithoutPrivateTagsInputSchema } from './PriorityUncheckedCreateWithoutPrivateTagsInputSchema';
import { PriorityCreateOrConnectWithoutPrivateTagsInputSchema } from './PriorityCreateOrConnectWithoutPrivateTagsInputSchema';
import { PriorityUpsertWithoutPrivateTagsInputSchema } from './PriorityUpsertWithoutPrivateTagsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './PriorityUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { PriorityUpdateWithoutPrivateTagsInputSchema } from './PriorityUpdateWithoutPrivateTagsInputSchema';
import { PriorityUncheckedUpdateWithoutPrivateTagsInputSchema } from './PriorityUncheckedUpdateWithoutPrivateTagsInputSchema';

export const PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.PriorityUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => PriorityUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PriorityUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
