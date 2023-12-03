import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateWithoutPrivateTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema';
import { ProjectTemplateUpsertWithoutPrivateTagsInputSchema } from './ProjectTemplateUpsertWithoutPrivateTagsInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './ProjectTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { ProjectTemplateUpdateWithoutPrivateTagsInputSchema } from './ProjectTemplateUpdateWithoutPrivateTagsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema';

export const ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => ProjectTemplateUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUpdateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
