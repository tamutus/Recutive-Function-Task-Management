import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutStudentsInputSchema } from './SkillPathCreateWithoutStudentsInputSchema';
import { SkillPathUncheckedCreateWithoutStudentsInputSchema } from './SkillPathUncheckedCreateWithoutStudentsInputSchema';
import { SkillPathCreateOrConnectWithoutStudentsInputSchema } from './SkillPathCreateOrConnectWithoutStudentsInputSchema';
import { SkillPathUpsertWithoutStudentsInputSchema } from './SkillPathUpsertWithoutStudentsInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathUpdateToOneWithWhereWithoutStudentsInputSchema } from './SkillPathUpdateToOneWithWhereWithoutStudentsInputSchema';
import { SkillPathUpdateWithoutStudentsInputSchema } from './SkillPathUpdateWithoutStudentsInputSchema';
import { SkillPathUncheckedUpdateWithoutStudentsInputSchema } from './SkillPathUncheckedUpdateWithoutStudentsInputSchema';

export const SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema: z.ZodType<Prisma.SkillPathUpdateOneRequiredWithoutStudentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutStudentsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutStudentsInputSchema).optional(),
  upsert: z.lazy(() => SkillPathUpsertWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillPathUpdateToOneWithWhereWithoutStudentsInputSchema),z.lazy(() => SkillPathUpdateWithoutStudentsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutStudentsInputSchema) ]).optional(),
}).strict();

export default SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema;
