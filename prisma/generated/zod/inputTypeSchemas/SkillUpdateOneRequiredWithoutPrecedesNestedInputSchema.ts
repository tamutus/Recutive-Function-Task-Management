import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPrecedesInputSchema } from './SkillCreateWithoutPrecedesInputSchema';
import { SkillUncheckedCreateWithoutPrecedesInputSchema } from './SkillUncheckedCreateWithoutPrecedesInputSchema';
import { SkillCreateOrConnectWithoutPrecedesInputSchema } from './SkillCreateOrConnectWithoutPrecedesInputSchema';
import { SkillUpsertWithoutPrecedesInputSchema } from './SkillUpsertWithoutPrecedesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutPrecedesInputSchema } from './SkillUpdateToOneWithWhereWithoutPrecedesInputSchema';
import { SkillUpdateWithoutPrecedesInputSchema } from './SkillUpdateWithoutPrecedesInputSchema';
import { SkillUncheckedUpdateWithoutPrecedesInputSchema } from './SkillUncheckedUpdateWithoutPrecedesInputSchema';

export const SkillUpdateOneRequiredWithoutPrecedesNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutPrecedesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPrecedesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrecedesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPrecedesInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutPrecedesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutPrecedesInputSchema),z.lazy(() => SkillUpdateWithoutPrecedesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrecedesInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutPrecedesNestedInputSchema;
