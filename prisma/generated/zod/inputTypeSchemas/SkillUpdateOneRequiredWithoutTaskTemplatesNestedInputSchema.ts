import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutTaskTemplatesInputSchema } from './SkillCreateWithoutTaskTemplatesInputSchema';
import { SkillUncheckedCreateWithoutTaskTemplatesInputSchema } from './SkillUncheckedCreateWithoutTaskTemplatesInputSchema';
import { SkillCreateOrConnectWithoutTaskTemplatesInputSchema } from './SkillCreateOrConnectWithoutTaskTemplatesInputSchema';
import { SkillUpsertWithoutTaskTemplatesInputSchema } from './SkillUpsertWithoutTaskTemplatesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutTaskTemplatesInputSchema } from './SkillUpdateToOneWithWhereWithoutTaskTemplatesInputSchema';
import { SkillUpdateWithoutTaskTemplatesInputSchema } from './SkillUpdateWithoutTaskTemplatesInputSchema';
import { SkillUncheckedUpdateWithoutTaskTemplatesInputSchema } from './SkillUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutTaskTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTaskTemplatesInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema;
