import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutTaskTemplatesInputSchema } from './TagCreateWithoutTaskTemplatesInputSchema';
import { TagUncheckedCreateWithoutTaskTemplatesInputSchema } from './TagUncheckedCreateWithoutTaskTemplatesInputSchema';
import { TagCreateOrConnectWithoutTaskTemplatesInputSchema } from './TagCreateOrConnectWithoutTaskTemplatesInputSchema';
import { TagUpsertWithoutTaskTemplatesInputSchema } from './TagUpsertWithoutTaskTemplatesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema } from './TagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema';
import { TagUpdateWithoutTaskTemplatesInputSchema } from './TagUpdateWithoutTaskTemplatesInputSchema';
import { TagUncheckedUpdateWithoutTaskTemplatesInputSchema } from './TagUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutTaskTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema),z.lazy(() => TagUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTaskTemplatesInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema;
