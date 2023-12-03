import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutProjectTemplatesInputSchema } from './TagCreateWithoutProjectTemplatesInputSchema';
import { TagUncheckedCreateWithoutProjectTemplatesInputSchema } from './TagUncheckedCreateWithoutProjectTemplatesInputSchema';
import { TagCreateOrConnectWithoutProjectTemplatesInputSchema } from './TagCreateOrConnectWithoutProjectTemplatesInputSchema';
import { TagUpsertWithoutProjectTemplatesInputSchema } from './TagUpsertWithoutProjectTemplatesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema } from './TagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema';
import { TagUpdateWithoutProjectTemplatesInputSchema } from './TagUpdateWithoutProjectTemplatesInputSchema';
import { TagUncheckedUpdateWithoutProjectTemplatesInputSchema } from './TagUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutProjectTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema),z.lazy(() => TagUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProjectTemplatesInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema;
