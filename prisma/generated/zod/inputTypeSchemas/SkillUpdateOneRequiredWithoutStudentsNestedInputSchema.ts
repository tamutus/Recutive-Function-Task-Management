import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutStudentsInputSchema } from './SkillCreateWithoutStudentsInputSchema';
import { SkillUncheckedCreateWithoutStudentsInputSchema } from './SkillUncheckedCreateWithoutStudentsInputSchema';
import { SkillCreateOrConnectWithoutStudentsInputSchema } from './SkillCreateOrConnectWithoutStudentsInputSchema';
import { SkillUpsertWithoutStudentsInputSchema } from './SkillUpsertWithoutStudentsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutStudentsInputSchema } from './SkillUpdateToOneWithWhereWithoutStudentsInputSchema';
import { SkillUpdateWithoutStudentsInputSchema } from './SkillUpdateWithoutStudentsInputSchema';
import { SkillUncheckedUpdateWithoutStudentsInputSchema } from './SkillUncheckedUpdateWithoutStudentsInputSchema';

export const SkillUpdateOneRequiredWithoutStudentsNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutStudentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutStudentsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutStudentsInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutStudentsInputSchema),z.lazy(() => SkillUpdateWithoutStudentsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutStudentsInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutStudentsNestedInputSchema;
