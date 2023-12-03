import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutPrivateEnergiesInputSchema } from './TagCreateWithoutPrivateEnergiesInputSchema';
import { TagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TagUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TagCreateOrConnectWithoutPrivateEnergiesInputSchema } from './TagCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { TagUpsertWithoutPrivateEnergiesInputSchema } from './TagUpsertWithoutPrivateEnergiesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './TagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { TagUpdateWithoutPrivateEnergiesInputSchema } from './TagUpdateWithoutPrivateEnergiesInputSchema';
import { TagUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TagUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
