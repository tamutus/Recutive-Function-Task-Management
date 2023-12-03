import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesCreateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema } from './SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema';
import { SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema } from './SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema } from './SkillsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema';
import { SkillsToTaskTemplatesScalarWhereInputSchema } from './SkillsToTaskTemplatesScalarWhereInputSchema';

export const SkillsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema;
