import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutPrivateTagsInputSchema } from './ProjectCreateWithoutPrivateTagsInputSchema';
import { ProjectUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectUncheckedCreateWithoutPrivateTagsInputSchema';
import { ProjectCreateOrConnectWithoutPrivateTagsInputSchema } from './ProjectCreateOrConnectWithoutPrivateTagsInputSchema';
import { ProjectUpsertWithoutPrivateTagsInputSchema } from './ProjectUpsertWithoutPrivateTagsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './ProjectUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { ProjectUpdateWithoutPrivateTagsInputSchema } from './ProjectUpdateWithoutPrivateTagsInputSchema';
import { ProjectUncheckedUpdateWithoutPrivateTagsInputSchema } from './ProjectUncheckedUpdateWithoutPrivateTagsInputSchema';

export const ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUpdateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
