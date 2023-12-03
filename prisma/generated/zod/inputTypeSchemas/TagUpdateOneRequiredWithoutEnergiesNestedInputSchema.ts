import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutEnergiesInputSchema } from './TagCreateWithoutEnergiesInputSchema';
import { TagUncheckedCreateWithoutEnergiesInputSchema } from './TagUncheckedCreateWithoutEnergiesInputSchema';
import { TagCreateOrConnectWithoutEnergiesInputSchema } from './TagCreateOrConnectWithoutEnergiesInputSchema';
import { TagUpsertWithoutEnergiesInputSchema } from './TagUpsertWithoutEnergiesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutEnergiesInputSchema } from './TagUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { TagUpdateWithoutEnergiesInputSchema } from './TagUpdateWithoutEnergiesInputSchema';
import { TagUncheckedUpdateWithoutEnergiesInputSchema } from './TagUncheckedUpdateWithoutEnergiesInputSchema';

export const TagUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => TagUpdateWithoutEnergiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutEnergiesNestedInputSchema;
