import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutPrioritiesInputSchema } from './TagCreateWithoutPrioritiesInputSchema';
import { TagUncheckedCreateWithoutPrioritiesInputSchema } from './TagUncheckedCreateWithoutPrioritiesInputSchema';
import { TagCreateOrConnectWithoutPrioritiesInputSchema } from './TagCreateOrConnectWithoutPrioritiesInputSchema';
import { TagUpsertWithoutPrioritiesInputSchema } from './TagUpsertWithoutPrioritiesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutPrioritiesInputSchema } from './TagUpdateToOneWithWhereWithoutPrioritiesInputSchema';
import { TagUpdateWithoutPrioritiesInputSchema } from './TagUpdateWithoutPrioritiesInputSchema';
import { TagUncheckedUpdateWithoutPrioritiesInputSchema } from './TagUncheckedUpdateWithoutPrioritiesInputSchema';

export const TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutPrioritiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPrioritiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutPrioritiesInputSchema),z.lazy(() => TagUpdateWithoutPrioritiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPrioritiesInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema;
