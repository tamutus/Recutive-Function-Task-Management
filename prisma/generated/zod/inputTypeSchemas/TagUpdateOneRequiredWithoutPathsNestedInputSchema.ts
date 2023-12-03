import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutPathsInputSchema } from './TagCreateWithoutPathsInputSchema';
import { TagUncheckedCreateWithoutPathsInputSchema } from './TagUncheckedCreateWithoutPathsInputSchema';
import { TagCreateOrConnectWithoutPathsInputSchema } from './TagCreateOrConnectWithoutPathsInputSchema';
import { TagUpsertWithoutPathsInputSchema } from './TagUpsertWithoutPathsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutPathsInputSchema } from './TagUpdateToOneWithWhereWithoutPathsInputSchema';
import { TagUpdateWithoutPathsInputSchema } from './TagUpdateWithoutPathsInputSchema';
import { TagUncheckedUpdateWithoutPathsInputSchema } from './TagUncheckedUpdateWithoutPathsInputSchema';

export const TagUpdateOneRequiredWithoutPathsNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutPathsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPathsInputSchema),z.lazy(() => TagUncheckedCreateWithoutPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPathsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutPathsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutPathsInputSchema),z.lazy(() => TagUpdateWithoutPathsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPathsInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutPathsNestedInputSchema;
